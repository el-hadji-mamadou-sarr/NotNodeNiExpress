const getPeople =(req, res)=>{
    res.send('hello people');
}

const getSchool = (req, res)=>{
    res.send('hello people school');
}

module.exports = {getPeople,getSchool}