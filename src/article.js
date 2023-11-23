const _article = {
    init: async function() {
        // get article by index
        const id = new URLSearchParams(location.search).get('id');

        if (id) {
            const article = await this.getArticle(id);
            console.log(article);

            const user_id = article.user;
            const user = await this.getUser(user_id);
            
            article.user = user;

            // draw article
            this.drawArticle(article);
        }

    },
    getArticle: async function(id) {
        const url = 'https://api.slingacademy.com/v1/sample-data/photos/' + id;
        var article = await fetch(url);
        article = await article.json();

        return article.photo;
    },
    getUser: async function(id) {
        const user_url = 'https://dummyjson.com/users/' + id;
        var user = await fetch(user_url);
        user = await user.json();

        return user;
    },
    drawArticle: function(article) {
        document.getElementById('title').innerText = article.title;
        document.getElementById('image').src = article.url;
        document.getElementById('body').innerText = article.description;  
    }
}

_article.init();