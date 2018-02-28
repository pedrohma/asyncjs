var workers = [{ name: 'Pedro', position: 'Web Developer' }, 
                { name: 'Felipe', position: 'Consultant' }, 
                { name: 'Alan', position: 'Web Designer' }, 
                { name: 'Fred', position: 'iOS Developer' }]

function getWorkerInfo(worker){
    console.log(`${worker.name} is a ${worker.position}`);
}

//console.log(workers);

function getAllWorkers(){
    setTimeout(function (){
        workers.forEach(worker => {
            getWorkerInfo(worker);
        });
    }, 4000);
}

getAllWorkers();
workers.push({ name: 'John', position: 'Android Developer' });
workers.push({ name: 'Brian', position: 'Javascript Developer' });
