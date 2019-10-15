import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as ffp from 'find-free-port';
import Router from '~/routes/Router';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
    }

    async init() {
        await this.initMiddleware();
        await this.initRouter();
        console.log('init');
    }

    public async listen() {
        console.log('listen 0');
        const [ freePort ] = await ffp(process.env.PORT);
        console.log('listen 1');
        await new Promise(resolve => this.app.listen(freePort, () => resolve()));
        console.log('listen 2');
        return freePort;
    }

    /**
     * Use the order to provide correct initializing
     */
    private async initMiddleware() {
        this.app.use(express.static(process.env.OUTPUT_PATH));

        // uncomment after placing your favicon in /public
        // src.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        console.log('initMiddleware');
    }

    private async initRouter() {
        this.app.use(Router);
        console.log('initRouter');
    }
}

export default App;
