const _index = {
    init: async function () {
        // Load data post
        var posts = await this.loadData();

        // Draw 
        this.drawData(posts);
    },
    loadData: async function () {
        // url API
        const urlPosts = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=30';
        const urlUsers = 'https://dummyjson.com/users?limit=100';

        // collect responses with Promise
        const responses = await Promise.all([
            fetch(urlPosts),
            fetch(urlUsers)
        ]);
        console.log(responses);

        // grab response by index
        var posts = await responses[0].json();
        var users = await responses[1].json();

        // get data by key
        posts = posts.photos;
        users = users.users;

        for (let i = 0; i < posts.length; i++) {
            const article = posts[i];
            const userId = article.user;

            // arrow function
            const user = users.find(u => u.id == userId);

            article.user = user;
        }

        return posts;
    },
    drawData: function (posts) {
        console.log(posts);
        const dom_posts = document.getElementById('posts');

        for (let i = 0; i < posts.length; i++) {
            const article = posts[i];

            console.log(article);

            const html =
                `<div class="article bg-rose-900 rounded-xl flex flex-col justify-between gap-10">
                    <div>
                        <img src="${article.url}">
                        <div class="pt-5 p-5">
                            <a class="text-white font-bold text-xl" href="/src/article.html?id=${article.id}">${article.title}</a>
                            <div class="text-white text-base pt-2">${article.description}</div>
                        </div>
                    </div>        
    
                    <a href="/src/user.html?id=${article.user.id}" class="flex items-center gap-2">
                        <div class="flex justify-between items-center">
                            <div class="flex gap-3 items-center rounded-xl p-5">
                        </div>
                        <div>
                            <div class="text-rose-200 font-semibold text-lg">${article.user.firstName} ${article.user.lastName}</div>
                            <div class="text-white">${article.user.email}</div>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                            </svg>
                            <p>10</p>                  
                        </div>
                    </a>
                </div>`;

            dom_posts.innerHTML += html;
        }
    }
};

_index.init();