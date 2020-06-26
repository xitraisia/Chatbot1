import formats from 'newbot-formats'
import code from './main.converse'
import helloSkill from './skills/hello/hello'
import project from './skills/project/project'
import about from './skills/about/about' 
import joke from './skills/joke/joke'

export default {
    code,
    skills: {
        formats,
        helloSkill,
        project,
        about,
        joke
    }
}