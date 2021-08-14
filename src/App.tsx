import Board from 'react-trello';

const mockData = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins',}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: [
        {id: 'Card3', title: 'Write Test', description: 'Aboba', label: '30 mins'},
      ]
    }
  ]
}

const App = () => {
  return (
    <div className="kanban-app">
      <Board data={mockData} draggable style={{backgroundColor: '#fff'}} laneStyle={{backgroundColor: '#eee'}}/>
    </div>
  );
}

export default App;
