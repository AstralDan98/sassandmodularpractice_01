export const getFingerprint = () =>{

    const client = new ClientJS();

    /* Como tal creamos una nueva variable que contiene el codigo "fingerprint" que nos interese*/
    let fingerprint = client.getFingerprint();
    let browser = client.getBrowser();
    let cpu = client.getCPU();
    let userAgent = client.getUserAgent();
    
    /*Si tenemos mas de un dato que queremos que nos devuelva los añadimos dentro de su propio array*/
    let clientArray = [fingerprint, browser, cpu, userAgent];
    
    /*En caso de tener un solo dato lo llamaríamos con return, pero como hay mas de uno llamamos al Array*/
    return clientArray;
};