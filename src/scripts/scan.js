import fs from 'node:fs';
import path from 'node:path';
import ExifReader from 'exifreader';

async function getTags(file){
    let tags = ExifReader.load(file);
    return tags;
}
function scanDirectory(directoryPath) {
    const fileList = [];

    fs.readdir(directoryPath, {withFileTypes:true,recursive:true},(err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        files.forEach(file => {
            if (file.isFile()&&file.name&&file.parentPath) {
                console.log(file.name);
                let filePath = path.join(file.parentPath, file.name);
                if (file.name.endsWith('.jpg') || file.name.endsWith('.jpeg')) {
                    let tags = getTags(filePath);
                    console.log(tags);
                }
            } }
        );

        console.log('Files:', fileList);
    });
}

// Replace '/path/to/directory' with the actual directory path you want to scan
scanDirectory("/mnt/d/Photos");