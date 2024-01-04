// Sample dynamic content
const data = [
    { title: "Column 1", image: "image1.jpg", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Column 2", image: "image2.jpg", content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { title: "Column 3", image: "image3.jpg", content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris." }
];

// Function to set dynamic content
function setContent(columnId, titleId, imageId, contentId, item) {
    document.getElementById(titleId).innerText = item.title;
    document.getElementById(imageId).src = item.image;
    document.getElementById(contentId).innerText = item.content;
}

// Set content for each column
setContent("column1", "title1", "image1", "content1", data[0]);
setContent("column2", "title2", "image2", "content2", data[1]);
setContent("column3", "title3", "image3", "content3", data[2]);

// 獲取所有欄位元素
var columns = document.querySelectorAll('.column');

// 添加滑鼠移入事件監聽器
columns.forEach(function(column) {
    column.addEventListener('mouseover', function() {
        // 更改背景顏色和文字顏色
        this.style.backgroundColor = 'darkgray';
        this.style.color = 'white';
    });

    // 添加滑鼠移出事件監聽器
    column.addEventListener('mouseout', function() {
        // 還原背景顏色和文字顏色
        this.style.backgroundColor = '';
        this.style.color = '';
    });
});
