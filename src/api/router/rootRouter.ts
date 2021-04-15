import { Router } from 'express'
import { tjJpopRankController, tjKpopRankController, tjPopRankController } from '../middleware/tjMedia'

const rootRouter = Router()

rootRouter.use('/tjKpop', tjKpopRankController.kpopRank);
rootRouter.use('/tjJpop', tjJpopRankController.jpopRank);
rootRouter.use('/tjpop', tjPopRankController.popRank);
rootRouter.get('/', tjKpopRankController.kpopRank);


export { rootRouter }