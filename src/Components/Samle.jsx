import React from 'react';

const MyComponent = () => {
  const users = [
    {
      username: 'Jeff',
      online: true
    },
    {
      username: 'Alan',
      online: false
    },
    {
      username: 'Mary',
      online: true
    },
    {
      username: 'Jim',
      online: false
    },
    {
      username: 'Sara',
      online: true
    },
    {
      username: 'Laura',
      online: true
    }
  ];

  const usersOnline = users.filter((user) => user.online);
  const renderOnline = usersOnline.map((user, index) => (
    <li key={index} className="list-disc ml-6">{user.username}</li>
  ));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Current Online Users:</h1>
      <ul>
        {renderOnline}
      </ul>
    </div>
  );
};

export default MyComponent;
