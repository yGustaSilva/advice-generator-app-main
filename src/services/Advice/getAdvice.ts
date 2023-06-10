export const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await (await response.json()).slip;
    return data;
}