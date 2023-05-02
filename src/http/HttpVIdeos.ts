import { IVideo } from "../interface/IVideo"

export const getVideosApi = (): IVideo[] =>{
    return [
        {   

            id: 1,
            title: "A tua palavra",
            url: "https://www.youtube.com/embed/L6urQI8NzvU"
        },
        {   
            id: 2,
            title: "Faz morada",
            url: "https://www.youtube.com/embed/M4nV3h3-ZO0"
        },
        {
            id: 3,
            title: "Me atraiu",
            url: 'https://www.youtube.com/embed/Z6cONvRUFZQ'
        }
    ]
}