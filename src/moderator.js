const Bot = function() {
    this.channels = [];
    this.skills = [];
    this.recognizers = [];

    this.link = function(channel) {
        this.channels.push(channel);
    };

    this.understand = function(skill) {
        return this.skills[skill] = {
            in: (recognizer) => {
                this.recognizers.push(recognizer);
                return {
                    as: (intent) => {
                        recognizer.addBranch(intent, skill);
                    },
                };
            }
        };
    }

    this.wakeUp = function() {
        this.channels[0].subscribe(this.recognizers[0]);
    }
};

const moderator = {
    createBot() {
        return new Bot();
    }
};

export default moderator;
