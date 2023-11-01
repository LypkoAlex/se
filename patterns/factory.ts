class Factory {
    public static create(type: string): Product {
        switch (type) {
            case 'A':
                return new ProductA();
            case 'B':
                return new ProductB();
            default:
                throw new Error('Type not found');
        }
    }
}