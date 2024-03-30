import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'
import path from 'path';
import nodePandoc from "node-pandoc";


export default async (req: NextApiRequest, res: NextApiResponse) => {

  const filePath = path.join(process.cwd(), 'public', 'message.md')

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return;
    }
    const src = data;
    try {
      nodePandoc(src, '-f markdown -t latex', (err: string, latexResult: any) => {
        if (err) {
          console.error(err)
          return res.status(500).json({ error: 'Failed to convert Markdown to LaTeX' })
        }
        nodePandoc(latexResult, '-f latex -t html5', (err: string, htmlResult: any) => {
          if (err) {
            console.error(err)
            return res.status(500).json({ error: 'Failed to convert LaTeX to HTML' })
          }
          res.status(200).json({ html: htmlResult })
        })
      })
    } catch (error) {
      console.error('Error reading file:', error)
      return res.status(500).json({ error: 'Failed to read file' })
    }
  })
}
