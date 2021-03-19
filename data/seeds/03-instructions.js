exports.seed = function (knex) {
  return knex('instructions').insert([
    {
      instructions: 'Ground round aliquip picanha pork chop minim',
      step_number: 1,
      recipe_id: 1,
    },
    {
      instructions: 'ad tongue beef voluptate eu buffalo id',
      step_number: 2,
      recipe_id: 1,
    },
    {
      instructions: 'Et consectetur officia ham hock ea id quis meatball',
      step_number: 3,
      recipe_id: 1,
    },
    {
      instructions: 'rump landjaeger voluptate short ribs nulla',
      step_number: 1,
      recipe_id: 2,
    },
    {
      instructions: 'Ribeye non ullamco chislic in',
      step_number: 2,
      recipe_id: 2,
    },
    {
      instructions: 'Doner nulla boudin cupim',
      step_number: 3,
      recipe_id: 2,
    },
    {
      instructions: 'Ham hock drumstick t-bone in sausage proident',
      step_number: 1,
      recipe_id: 3,
    },
    {
      instructions:
        'Shank bacon pastrami sausage, nisi salami cillum ut rump minim meatloaf ea chuck fatback',
      step_number: 2,
      recipe_id: 3,
    },
    {
      instructions: 'Ex short loin doner flank, aute ut sausage bresaola',
      step_number: 3,
      recipe_id: 3,
    },
  ]);
};