const initialState = {
  columns: [
    {
      id: '1',
      title: 'Books',
      icon: 'book',
      listId: '1',
    },
    {
      id: '2',
      title: 'Movies',
      icon: 'film',
      listId: '1',
    },
    {
      id: '3',
      title: 'Games',
      icon: 'gamepad',
      listId: '1',
    },
    {
      id: '4',
      title: 'Songs',
      icon: 'music',
      listId: '2',
    },
  ],

  cards: [
    {
      id: '1',
      columnId: '1',
      title: 'Pomnik Cesarzowej Achai',
      isFavourite: true,
    },
    { id: '2', columnId: '1', title: 'Szogun', isFavourite: false },
    { id: '3', columnId: '2', title: 'JavaScript', isFavourite: true },
    { id: '4', columnId: '2', title: 'Python', isFavourite: false },
    { id: '5', columnId: '3', title: 'Skrzynia skarbów', isFavourite: false },
    {
      id: '6',
      columnId: '3',
      title: 'Pudełko na kosmetyki do łazienki',
      isFavourite: false,
    },
    { id: '7', columnId: '4', title: 'Gregorian', isFavourite: false },
    { id: '8', columnId: '4', title: 'Nightwish', isFavourite: false },
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out',
    },
    {
      id: '2',
      title: 'Test list',
      description: 'Lorem Ipsum',
    },
  ],

  searchString: '',
};

export default initialState;
