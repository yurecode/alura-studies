import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista(){
    const tarefas = [
        {
            tarefa: 'React',
            tempo: '02:00:00'
        },
        {
            tarefa: 'Javascript',
            tempo: '01:00:00'
        },
        {
            tarefa: 'Typescritp',
            tempo: '03:00:00'
        }
    ]
    return(
        <aside className={style.listaTarefas}>
            <h2>
                Estudo do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                 <Item
                    {...item}
                 />   
                ))}
            </ul>
        </aside>
    )
}

export default Lista;