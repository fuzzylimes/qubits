const QRCode = require('qrcode');
const { createCanvas } = require('canvas');


module.exports = async (req, res) => {
    const { body } = req;
    if (!body) {
        res.status(400);
        res.send({ Message: 'Invalid body' });
        return;
    }
    if (!body.text) {
        res.status(400);
        res.send({ Message: 'Invalid body' });
        return;
    }

    const canvasObject = createCanvas(256, 256)
    QRCode.toCanvas(canvasObject, body.text)
        .then(async (canvas) => {
            try {
                const buffer = await canvas.toBuffer();
                res.setHeader('Content-Type', 'image/png');
                res.send(buffer);
            } catch (err) {
                console.error(err);
                res.status(500);
                res.send();
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500);
            res.send();
        });
};
