const { data, dataCount } = require('../Constants/data.js');

exports.create = async (req, res) => {
    try {
        const details = req.body.components;

        if (!details) {
            return res.status(400).send({ message: "Details not found" });
        }

        if (details.length !== 5) {
            return res.status(400).send({ message: "Array size of components must be 5" });
        }

       
        const output = {
            order_id: 1,
            total: 0,
            parts: []
        };

        
        
        let errorMessage = [];
        let categorySelection = {};

        
        for (let i = 0; i < data.length; i++) {
            categorySelection[data[i][3]] = { count: 0, component: null };
        }

        
        details.forEach(component => {
            for (let i = 0; i < data.length; i++) {
                if (data[i][0] === component) {
                    const category = data[i][3];
                    categorySelection[category].count++;
                    categorySelection[category].component = component;

                    
                    if (categorySelection[category].count === 1) {
                        output.total += data[i][1];
                        output.parts.push(data[i][2]);
                    }
                    break;
                }
            }
        });

        
        for (let category in categorySelection) {
            if (categorySelection[category].count === 0) {
                errorMessage.push({ message: `No component selected from category ${category}` });
            } else if (categorySelection[category].count > 1) {
                errorMessage.push({ message: `Component ${categorySelection[category].component} from category ${category} is selected more than once` });
            }
        }

        if (errorMessage.length > 0) {
            return res.status(400).send(errorMessage);
        }

        const finalOutput = output;
        console.log(finalOutput);

        return res.status(200).send(finalOutput);

    } catch (error) {
        return res.status(400).send(error.message);
    }
};
