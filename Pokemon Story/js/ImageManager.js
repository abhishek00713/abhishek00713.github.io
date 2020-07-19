class ImageManager {
    constructor (){
        this.images = {};
        //load bhako image haru ko list
        
    }
//
    load(images, onDone) {
        //The images are put inside the queue
        var queue = [];
        for(let im in images) {
            queue.push(
                {
                    key: im,
                    path: images[im]
                }
            );
        }

        if(queue.length == 0){
            // onProgress && onProgress(0,0,null,null, true);
            onDone && onDone();

            return;
        }

        var itemCounter = {
            loaded: 0, //number of loaded images
            total: queue.length //total number of images
        };

        for(let i=0; i<queue.length; i++) {
            this.loadItem(queue[i], itemCounter, onDone);
        }
    }

    getImage(key) {

        return this.images[key];
    }

    loadItem(queueItem, itemCounter, onDone) {
        var img = new Image();

        img.onload = () => {
            this.images[queueItem.key] = img;
            this.onItemLoaded(queueItem, itemCounter, onDone);
        }

        img.onerror = () => {
            this.onItemLoaded(queueItem, itemCounter, onDone);
        }

        img.src = queueItem.path;
    }

    onItemLoaded(queueItem, itemCounter, onDone){
        itemCounter.loaded++;
        

        if(itemCounter.loaded == itemCounter.total) {
            onDone && onDone();
        }
    }
}