const { Router } = require("express");
const router = Router();
const fetch = require('node-fetch');

router.get('/:language', async (req, res) =>{
    const { language } = req.params;
    const repositorys = await callRepositoryInformation(language);

    const response = {
        "searchingFor": language,
        "founded": Object.keys(repositorys).length,
        data : { repositorys }
    };
    res.json({ response })
});

router.get('/', async (req, res) =>{
    const language = 'ALL';
    const repositorys = await callRepositoryInformation(language);

    const response = {
        "searchingFor": language,
        "founded": Object.keys(repositorys).length,
        data : { repositorys }
    };
    res.json({ response })
});

module.exports = router;

async function callRepositoryInformation( filter ) {
    const repos = await fetch('https://api.github.com/users/aws/repos?page=1');
    repositorys = await repos.json();

    if (filter.toUpperCase() != "ALL") {
        repositorys = repositorys.filter(function(repository){
            return (repository.language === filter);
        });
    }
    return repositorys; 
}
