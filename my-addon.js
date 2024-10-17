class MyScratchAddon {
    getInfo() {
        return {
            id: 'myaddon',
            name: 'My Scratch Addon',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'say hello',
                    arguments: {},
                },
            ],
        };
    }

    sayHello() {
        return 'Hello from My Scratch Addon!';
    }
}

Scratch.extensions.register(new MyScratchAddon());
