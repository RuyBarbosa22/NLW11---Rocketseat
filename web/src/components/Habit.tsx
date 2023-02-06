interface HabitProps { // propriedade do componente (atributos)
    completed: number
}

export function Habit(props: HabitProps) { //como parametro da função dizemos que ele é semelhante a propriedade do componente
    return (
        <div className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center">{props.completed}</div>
    )
}