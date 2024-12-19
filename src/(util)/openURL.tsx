export default 
    (url: string, blank = false) => window.open(url, `_${blank ? 'blank' : 'self'}`);