import Board from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Add card",
          description: "Add capability to add a card in a column",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 2,
          title: "Drag-n-drop support",
          description: "Move a card between the columns",
        },
      ],
    },
    {
      id: 3,
      title: "Done",
      cards: [
        {
          id: 3,
          title: "Test card",
          description: "Just a card for test",
        },
      ],
    },
  ],
};
const App = () => {
  return (
    <div
      className="kanban-app"
      style={{ background: "yellow", margin: "1em", padding: "1em" }}
    >
      Kanban App
      <Board initialBoard={board} />
    </div>
  );
};

export default App;
