import React from "react";
import Todo from "./Todo";

export default function ToDosView(props) {
  return (
    <main className="toDosView">
      <section className="sheetName">
        <h1>
          <i class="bx bx-home-alt-2"></i> SheetName
        </h1>
      </section>
      <section className="openToDos">
        <Todo text={"This is a task"} type={"open"} />
        <Todo text={"This is a task"} type={"open"} />
        <Todo text={"This is a task"} type={"open"} />
        <Todo text={"This is a task"} type={"open"} />
        <Todo text={"This is a task"} type={"open"} />
        <Todo text={"This is a task"} type={"open"} />
        <Todo text={"This is a task"} type={"open"} />
      </section>
      <section className="doneToDos">
        <Todo text={"This is a done task"} type={"done"} />
        <Todo text={"This is a done task"} type={"done"} />
        <Todo text={"This is a done task"} type={"done"} />
        <Todo text={"This is a done task"} type={"done"} />
        <Todo text={"This is a done task"} type={"done"} />
        <Todo text={"This is a done task"} type={"done"} />
        <Todo text={"This is a done task"} type={"done"} />
      </section>
      <section className="addToDos">
        <p className="addTodo">
          <i className="bx bx-plus"></i> Add Task
        </p>
      </section>
    </main>
  );
}
