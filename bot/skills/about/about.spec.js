import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import about from './about'

describe('About Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(about)
        userConverse = converse.createUser({
            session: {
                message: {
                    source: 'website'
                }
            }
        })
    })

    it('about', () => {
        return userConverse
            .conversation(
                user `about`,
                bot ` This is what I found `
            )
    })
})