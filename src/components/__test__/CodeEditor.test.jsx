import { render, screen } from '@testing-library/react'
import CodeEditor from '../CodeEditor'

test('renders Code Editor successfully', () => {
    const handleFunction = vi.fn()

    render(
        <CodeEditor
            handleEditorChange={handleFunction}
            handleThemeChange={handleFunction}
            handleLanguageChange={handleFunction}
            selectedLanguage="javascript"
            selectedTheme="vs-dark"
            runCode={handleFunction}
            value="// Write code here"
        />
    )

})