import {surpriseMePrompts} from '../constants';
import FileSaver from 'file-saver'
export function getRandomPrompt(prompt){
    const randomIndex=Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompts=surpriseMePrompts[randomIndex];
    if (randomPrompts===prompt) {
        getRandomPrompt(prompt)
    }
    return randomPrompts;
}


export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
}