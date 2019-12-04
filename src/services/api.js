export function loadLists() {
  return [
    { 
      title: 'Tasks', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Meditation',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 2,
          content: 'Read',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 3,
          content: 'Campaign optimization',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 4,
          content: 'Code Pratice',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 5,
          content: 'Deploy App X',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
      ]
    },
    { 
      title: 'On it', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Pipefy clone',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        }
      ]
    },
    { 
      title: 'Paused', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Review Launch Campaigns',
          labels: ['#7159c1'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 8,
          content: 'Create New creative tests',
          labels: ['#54e1f7'],
          user: 'https://api.adorable.io/avatars/100/abott@adorable.png'
        },
        {
          id: 9,
          content: 'Write a copy for XPTO product',
          labels: ['#7159c1'],
        }
      ]
    },
    { 
      title: 'Done', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Study about dnd',
          labels: [],
        },
        {
          id: 12,
          content: 'Analyse personal finances',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Monthly Aport in stocks"',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}