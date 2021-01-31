var ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',// <-- replace yourproject with your repo name
    {
        branch: 'gh-pages',
        repo: 'https://github.com/pauljeanquart/my-app.git',
        user: {
            name: 'Paul Jeanquart',
            email: 'paul.jeanquart@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
