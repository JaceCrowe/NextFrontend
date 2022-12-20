const withAuth = () => {
    ///check Augh
    return(req, res) => {
    //
    }
}

export default function handler(req, res) {
    if (req.method === 'POST') {
        res.json({data: {me: true}})
    }
};