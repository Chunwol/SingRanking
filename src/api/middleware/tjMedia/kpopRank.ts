import {
  NextFunction,
  Request,
  Response,
} from 'express';

const axios = require("axios");
const cheerio = require("cheerio");
const moment = require("moment");

const kpopRank = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await axios.get("http://www.tjmedia.co.kr/tjsong/song_monthPopular.asp?strType=1&SYY="+moment().subtract(7, 'd').format("YYYY")+"&SMM="+moment().subtract(7, 'd').format("MM")+"&SDD="+moment().subtract(7, 'd').format("DD")+"&EYY="+moment().format("YYYY")+"&EMM="+moment().format("MM")+"&EDD="+moment().format("DD")).then(html => {
      let tjKpop = [];
      const $ = cheerio.load(html.data);
      const bodyList = $("#BoardType1 table tbody tr").each(function(i, elem) {
        tjKpop[i] = {
            rank: $(this).find('td:nth-of-type(1)').text(),
            number: $(this).find('td:nth-of-type(2)').text(),
            name: $(this).find('td:nth-of-type(3)').text(),
            singer: $(this).find('td:nth-of-type(4)').text(),

        };
      });
      tjKpop.shift()
      res.render('index', { title: 'Express', tj : tjKpop })
      //res.status(200).json({ success: true, tjKpop });
    })
  } catch (error) {
    console.error(error);
  }
};


export const tjKpopRankController = {
  kpopRank,
}