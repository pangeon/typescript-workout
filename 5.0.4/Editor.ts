import {Author} from "./Author";

export class Editor extends Author {
    editedPostsTitles: string[] = [];

    addPostAsEdited(id: number) {
        if(this.publishedPostsTitles.length >= 0) {
            this.editedPostsTitles.push(this.publishedPostsTitles[id]);
        }
    }
}