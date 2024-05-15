const { create } = require('./Controllers/order.js');

describe("Create Function", () => {
    test("Valid input", () => {
        const req = {
            body: {
                components: ["B", "I", "E", "G", "L"]
            }
        };
        const res = {
            status: jest.fn(() => res),
            send: jest.fn()
        };

        create(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({
            "order_id": 1,
            "total": 143.89999999999998,
            "parts": [
                "OLED Screen",
                "Andriod OS",
                "Ultra-Wide-Angle Camera",
                "Micro-USB Port",
                "Plastic Body"
            ]
        }));
    });

    test("Missing component from a category", () => {
        const req = {
            body: {
                components: ["B", "I", "G", "L"]
            }
        };
        const res = {
            status: jest.fn(() => res),
            send: jest.fn()
        };

        create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({
            "message": "Array size of components must be 5"
        });
    });

    test("Duplicate component within a category", () => {
        const req = {
            body: {
                components: ["B", "I", "B", "G", "L"]
            }
        };
        const res = {
            status: jest.fn(() => res),
            send: jest.fn()
        };

        create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith([
            {
                "message": "Component B from category Screen is selected more than once"
            },
            {
                "message": "No component selected from category Camera"
            }
        ]);
    });

    test("Invalid input: Details not found", () => {
        const req = {
            body: {}
        };
        const res = {
            status: jest.fn(() => res),
            send: jest.fn()
        };

        create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ message: "Details not found" });
    });

    test("Invalid input: Array size of components must be 5", () => {
        const req = {
            body: {
                components: ["B", "I", "E", "G"]
            }
        };
        const res = {
            status: jest.fn(() => res),
            send: jest.fn()
        };

        create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith({ message: "Array size of components must be 5" });
    });
});
