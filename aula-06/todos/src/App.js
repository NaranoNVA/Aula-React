import React from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import './App.css';

const ALL_TODOS = gql`
query allTodos {
    todos{
      id,
      texto,
      completa
    }
}`
;

const TOOGLE_TODOS = gql`
mutation MarcarTodos($id: uuid!, $completa: Boolean! ) {
    update_todos(
      where: {id: {_eq: $id}},
      _set: {completa: $completa}) {
      returning {
        id,
        texto,
        completa,
      }
    }
  }  
`;

const INSERT_TODOS = gql`
mutation insertTodos($texto: String!) {
    insert_todos(objects: {texto: $texto}) {
      returning{
        id,
        texto,
        completa
      }
    }
  }  
`;

const DELETE_TODOS = gql`
mutation DeleteTodos($id: uuid!) {
    delete_todos(where: {id: {_eq: $id}}) {
      returning {
        completa
        id
        texto
      }
    }
  }
`;


export default function  App (){
    const [todoTexto, setTodoText] = React.useState('');
    const {data, loading, error } = useQuery(ALL_TODOS);
    const [toogle_todos] = useMutation(TOOGLE_TODOS);
    const [insert_todos] = useMutation(INSERT_TODOS);
    const [delete_todos] = useMutation(DELETE_TODOS);



    async function handleConcluirTarefa ({id, completa}){
        await toogle_todos({ variables: { id, completa: !completa } })
    }

    async function handlerInsertTodo (event){
        event.preventDefault();
        await insert_todos({ 
            variables: { texto: todoTexto },
            refetchQueries: [{ query: ALL_TODOS }]
        });
        setTodoText('');
    } 

    async function handleDeleteTodo({id}){
        if(window.confirm("Deseja apagar essa tarefa?")){
            await delete_todos({
                variables: { id: id },
                refetchQueries: [{ query: ALL_TODOS }]
            });
        }  
    }

    return (
        <>
        {
            loading && 
            <>
                <h1>Carregando</h1>
            </>
        }
        {
            !loading && 
            <>
                {
                    <>
                        <h1>Lista de Tarefas</h1>         
                        <form onSubmit={(event) => handlerInsertTodo(event)}>
                            <input type="text" placeholder="Digite o nome da tarefa" value={todoTexto} onChange={(event) => setTodoText(event.target.value)}></input>
                            <button type="submit">Salvar Tarefa</button>
                        </form>
                        <hr/>
                        {
                            data.todos.map((todo) => 
                                <div key={todo.id} onDoubleClick={ () => handleConcluirTarefa(todo)}>
                                    <input type="checkbox" checked={todo.completa}></input>
                                    <label className={`${todo.completa ? "item-completo" : ""}`}>{todo.texto}</label>
                                    <button onClick={() => handleDeleteTodo(todo)}>x</button>  
                                </div>
                            )
                        }
                    </>
                }   
            </>
        }
        {
            error && 
            <>
                <h1>Deu ruim meno</h1>
            </>
        }
        </>
    );
}