const db = require("../database")

module.exports = {
    postRoad : (req, res) => {
        var data = req.body
        var sql = `insert into road set ?`
        db.query(sql, data, (err, result) => {
            try {
                if(err) throw {error : true, msg : "Error in Database"}
                console.log("Data Added")
            } catch (err) {
                console.log(err)
            }
        })
    }
}
