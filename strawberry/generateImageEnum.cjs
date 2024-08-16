const fs = require('fs');
const path = require('path');

// 이미지 파일이 있는 기본 디렉토리
const baseDir = path.join(__dirname, 'public/assets/');

// 디렉토리를 재귀적으로 탐색하여 이미지 파일 경로를 수집
const getImageFiles = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      results.push({
        name: file,
        files: getImageFiles(filePath),
      });
    } else if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {
      results.push(filePath);
    }
  });

  return results;
};

// 이미지를 enum으로 변환
const generateEnum = (files, parentKey = '') => {
  let enumString = '';

  files.forEach((file) => {
    if (typeof file === 'object') {
      // 하위 디렉토리의 enum을 생성
      const key = file.name.toUpperCase().replace(/[^A-Z0-9]/g, '_');
      enumString += `  ${key}: {\n`;
      enumString += generateEnum(file.files, key);
      enumString += `  },\n`;
    } else {
      // 이미지 파일의 enum을 생성
      const relativePath = path.relative(baseDir, file).replace(/\\/g, '/');
      const fileName = path.basename(file, path.extname(file)).toUpperCase().replace(/[^A-Z0-9]/g, '_');
      enumString += `    ${fileName}: "/assets/${relativePath}",\n`;
    }
  });

  return enumString;
};

// 메인 함수
const main = () => {
  const imageFiles = getImageFiles(baseDir);
  let enumString = 'export const ImageEnum = {\n';
  enumString += generateEnum(imageFiles);
  enumString += '}\n';
  fs.writeFileSync(path.join(__dirname, 'src/core/design_system/ImageEnum.ts'), enumString);
  console.log('Enum file generated!');
};

main();
