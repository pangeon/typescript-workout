const Fn = async () => { throw new Error('Access dennied !'); }
const Hn = async () => console.log('Please secret enter password.');
const Gn = async () => { 
    try { 
        await Fn(); 
    } catch(e) { 
        console.log(e);
        Hn(); 
    } 
};
Gn();