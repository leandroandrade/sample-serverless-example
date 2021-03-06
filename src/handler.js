'use strict';

module.exports.getHeroes = async (event) => {
    const heroes = [
        { id:1, name: 'Batman' },
        { id:2, name: 'Superman' },
    ]

    return {
        statusCode: 200,
        body: JSON.stringify({ result: heroes }),
    };
};

module.exports.postHeroes = async (event) => {
    const { name } =  JSON.parse(event.body);

    return {
        statusCode: 201,
        body: JSON.stringify({ result: `Hero ${name} created!` })
    };
};

module.exports.getHeroByID = async (event) => {
    const { id } = event.pathParameters;
    const heroes = [
        { id:1, name: 'Batman' },
        { id:2, name: 'Superman' },
    ]
    const hero = heroes.find(hero => hero.id === +id);

    return {
        statusCode: 200,
        body: JSON.stringify({ result: hero })
    };
};

