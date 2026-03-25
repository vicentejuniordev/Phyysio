
describe('GET /users by cpf', () => {
    it('should return user data for a valid cpf', async () => {
        const response = await fetch("http://localhost:8000/api/users/12345678901");
        console.log(response.status);
        expect(response.status).toBe(200);
        expect(await response.json()).toHaveProperty('cpf', '12345678901');
    });

    it('should return 404 for an invalid cpf', async () => {
        const response = await fetch("http://localhost:8000/api/users/00000000000");
        expect(response.status).toBe(404);
    });
});