import {
    ConverseTesting,
    user,
    bot
} from 'newbot/testing'
import project from './project'

describe('Project Skill Test', () => {
    let userConverse, converse

    beforeEach(() => {
        converse = new ConverseTesting(project)
        userConverse = converse.createUser({
            session: {
                message: {
                    source: 'website'
                }
            }
        })
    })

    it('project', () => {
        return userConverse
            .conversation(
                user ` project `,
                bot ` This is what I have found `
            )
    })
})