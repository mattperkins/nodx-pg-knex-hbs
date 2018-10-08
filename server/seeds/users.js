
exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      const users = [

      {
        title: 'Title One',
        priority: 1,
        description: 'I wandered lonely as a cloud',
        date: new Date()
      },
      {
        title: 'Title Two',
        priority: 2,
        description: 'Many rivers to cross...',
        date: new Date()
      }

    ]
      return knex('users').insert(users);
    });
};
