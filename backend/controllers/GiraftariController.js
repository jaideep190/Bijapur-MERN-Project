import GiraftariDatas from '../models/GiraftariModel.js';
const saveGiraftari = async (req, res) => {
    try {
        const formData = req.body;
        const giraftariExists = await GiraftariDatas.findOne({ crimeNumber: formData.crimeNumber });

        if (giraftariExists) {
            return res.status(200).json({ "msg": "Giraftari Already Exists" });
        }

        const userCreated = await GiraftariDatas.create(formData);

        if (!userCreated) {
            return res.status(500).json({ "msg": "Data not created" });
        }

        return res.status(200).json({ "msg": "User Created!" });
    } catch (error) {
        return res.status(500).json({ "msg": "Internal server side error" });
    }
}

export { saveGiraftari };