function answerUserInput(input) {
    const knowledgeBase = [
        { question: "Xin chào", answer: "Chào bạn!" },
        { question: "Hi", answer: "Hello" },
        { question: "Bạo lực học đường là gì?", answer: "là tập hợp những hành vi thô bạo, ngang ngược, vi phạm quy tắc và chuẩn mực xã hội, gây tổn thương về mặt tinh thần và thể xác. Đây là những hành động diễn ra trong bối cảnh trường học và thường tác động đến học sinh và sinh viên." },
        { question: "Các loại bạo lực học đường? ", answer: "4 loại: Bạo lực bằng lời nói;  Bạo lực thân thể;  Bạo lực xã hội; Bạo lực trên môi trường mạng." },
        { question: "Bạo lực bằng lời nói là gì?", answer: "Là hành vi dùng lời nói dùng từ ngữ tàn nhẫn, có tính chất xúc phạm, miệt thị, bao gồm: trêu chọc, sỉ nhục, đặt biệt danh, đe doạ, bình phẩm thiếu tôn trọng về người khác (vẻ ngoài, tôn giáo, dân tộc, người khuyết tật, giới tính , gia đình đơn thân, nghề nghiệp cha mẹ, hoàn cảnh gia đình..)." },
        { question: "Bạo lực xã hội là gì?", answer: "Là có những hành động ngăn cản trẻ hoà đồng với bạn bè chung lớp hoặc một số nhóm, hội trong trường học, làm con trẻ bị xấu hổ, cảm thấy cực kỳ tủi thân và nghiêm trọng." },
        { question: "Bạo lực trên môi trường mạng là gì?", answer: "Là những hành vi gây hại cố ý, được lặp lại, thông qua các thiết bị điện tử như máy tính, điện thoại, và các mạng xã hội, email, diễn đàn, website, nền tảng trực tuyến." },
        { question: "Biểu hiện của học sinh khi bị bạo lực bằng lời nói?", answer: "Có thể bắt đầu bỏ bữa, đổi khẩu vị, trở nên buồn bã hoặc cáu bẳn. Trẻ bắt đầu chia sẻ với cha mẹ về những điều đáng buồn mà bạn bè hoặc ai đó nói về trẻ và trẻ có thể hỏi bạn xem những điều ấy có thật hay không." },
        { question: "Biểu hiện của học sinh khi bị bạo lực thân thể?", answer: "Xuất hiện những vết thương, cào, dấu bầm tím trên cơ thể trẻ, quần áo bị rách, bị xé hoặc những khi trẻ than thở đau đầu, đau bụng" },
        { question: "Biểu hiện của học sinh khi bị bạo lực xã hội?", answer: "Đột nhiên ngừng chơi với nhóm bạn hoặc không tham gia hoạt động tập thể nào đó, hoạt động một mình nhiều hơn bình thường" },
        { question: "Biểu hiện của học sinh khi bị bạo lực mạng?", answer: "Trẻ dành nhiều thời gian trên mạng: trẻ lướt mạng xã hội và nhắn tin liên tục, nhưng trông các con khá buồn, hay thậm chí căng thẳng." },
        { question: "Số điện thoại trợ giúp?", answer: "Tổng đài quốc gia bảo vệ trẻ em: 111" },
        { question: "Bị bạo lực học đường thì phải làm sao?", answer: "Nói chuyện với người lớn tin cậy: có thể là phụ huynh, giáo viên, hoặc một người thân khác. Báo cáo với nhà trường: Nếu bạo lực xảy ra tại trường, bạn nên báo cáo với các nhà quản lý hoặc giáo viên." },
        { question: "Bạo lực thân thể là gì?", answer: "là bất kì hành động tiếp xúc thân thể không mong muốn nào xảy ra giữa kẻ bắt nạt và nạn nhân, bao gồm các hành động như nắm, giật tóc, khạc nhổ nước bọt, xô đẩy, tát, đấm đá,... gây nên những vết thương trên cơ thể, có thể để lại thương tích lâu dài như sẹo, trong trường hợp nghiêm trọng có thể bị tàn tật vĩnh viễn." },
        { question: "Nạn nhân của bạo lực học đường là ai?", answer: "Nạn nhân của bạo lực học đường có thể là bất kỳ ai trong môi trường học đường, bao gồm: Học sinh; Nhân viên nhà trường: Các giáo viên, nhân viên quản lý; Nhân viên dịch vụ: Các nhân viên dọn dẹp, nhân viên bảo vệ hoặc nhân viên ăn uống và Nhóm cộng đồng: tất cả mọi người trong trường." },
        { question: "Các quy định nào về phòng chống bạo lực học đường?", answer: "Nghị định số 80/2017/NĐ-CP ngày 17/7/2017 của Chính phủ quy định về môi trường giáo dục an toàn, lành mạnh, thân thiện, phòng, chống bạo lực học đường; Thông tư số 38/2019/TT-BLĐTBXH ngày 30/12/2019 của Bộ trưởng Bộ Lao động - Thương binh và Xã hội hướng dẫn xây dựng môi trường giáo dục an toàn, lành mạnh, thân thiện, phòng, chống bạo lực học đường trong các cơ sở giáo dục nghề nghiệp" },
        { question: "Khi em là nạn nhân của bạo lực học đường, em cần làm gì?", answer: "Cố gắng trao đổi, thương lượng các cách giải quyết khác thay vì đánh nhau, lùi bước để tránh bạo lực như khi bị trêu chọc, sỉ nhục nên im lặng, coi như không có chuyện gì, đi thẳng về hướng có đông người khác, nhưng không cam chịu liều mình để chịu trận.Trong trường hợp không thương lượng được, tìm cách chạy thoát khỏi hiện trường, cố gắng tìm nơi tập trung đông đúc dân cư hoặc hét thật to, tìm kiếm sự giúp đỡ của người khác, cố gắng bảo vệ cơ thể, đặc biệt các vùng: đầu, gáy, thái dương, cơ quan nội tạng,… Đánh nhau là phương thức cuối cùng để tự vệ, phản kháng và các em nên học một số động tác võ thuật để tự bảo vệ mình." },
        { question: "Cách phòng chống bạo lực học đường", answer: "Không đi một mình nơi vắng vẻ, tối tăm; không tham gia vào các nhóm bạn thường xuyên có hành vi lệch chuẩn; không tham gia kích bác, nói xấu bạn khác; tôn trọng và không xâm phạm vào cuộc sống riêng tư của bạn; không lấy cắp đồ vật của người khác.Không giấu giếm mọi chuyện mà nên nói chuyện với bố mẹ, người thân, thầy cô để ngăn chặn sự bắt nạt." },
        { question: "Khi chứng kiến hành vi bạo lực thì phải làm gì?", answer: "Từ chối những lôi kéo hoặc đề nghị sai trái, hình dung trước hậu quả khi thực hiện hành động bạo lực. Can ngăn, ngăn chặn hành vi vi phạm, không cổ vũ, không nói bất cứ điều gì khuyến khích thủ phạm tiếp tục thực hiện hành vi. Gọi điện, tìm cách liên lạc, thông báo cho các cá nhân, tổ chức có liên quan như gia đình, nhà trường, cảnh sát.… Giúp đỡ nạn nhân sơ cứu, cấp cứu. Có thái độ tử tế, thân thiện với các bạn bị bắt nạt. Nói chuyện với phụ huynh, giáo viên hoặc người lớn khác mà em tin tưởng để họ có thể giúp đỡ em" },
        { question: "Khi gây ra hành vi bạo lực thì phải như thế nào?", answer: "Nhận thức được hành vi sai trái của bản thân, hình dung hậu quả có thể dẫn tới vi phạm pháp luật bị xử lý: Báo ngay cho gia đình, thầy cô biết, không giấu diếm hay tìm cách che đậy, trốn tránh. Thể hiện thái độ ăn năn, tích cực phối hợp để khắc phục hậu quả. Tích cực rèn luyện đạo đức, kỉ luật." },
        { question: "Nguyên nhân của bạo lực học đường?", answer: "Nguyên nhân từ môi trường tự nhiên - xã hội tới hành vi bạo lực học đường. Nguyên nhân từ phía gia đình. Nguyên nhân từ phía nhà trường. Nguyên nhân từ phía học sinh." },
        { question: "Gia đình cần làm gì để hạn chế bạo lực học đường?", answer: "Gia đình cần quan tâm tới trẻ các vấn đề như: Thể chất, dinh dưỡng, biến đổi tâm, sinh lý. Những mối quan hệ, các hành vi, cách ứng xử. Sẵn sàng lắng nghe, chia sẻ những vấn đề, giải pháp. Giữ bí mật và hỗ trợ con trước các nguy cơ tiềm ẩn và hiện hữu. Chấp nhận sự khác biệt và tôn trọng con." },
        { question: "Hậu quả của bạo lực học đường", answer: "Với bản thân trẻ bị bắt nạt, các em sẽ rơi vào trạng thái bị tổn thương, lo âu, chán nản, suy sụp… Các em sẽ luôn bị ám ảnh là làm thế nào để đối phó với kẻ bắt nạt mình. Sự sợ hãi, ám ảnh đó sẽ khiến nhiều em bị stress. Dẫn đến những hậu quả như: không dám ra ngoài chơi hoặc đến trường, khả năng tập trung kém. Trong trường hợp tình trạng bắt nạt kéo dài, ngoài ảnh hưởng xấu đến học tập còn có tác hại lớn với sự phát triển về mặt cảm xúc và xã hội của các em. Các em có khả năng bị trầm cảm, có thể ảnh hưởng đến tâm lý khi trưởng thành của các em. Đối với những em học sinh chỉ chứng kiến, không tham gia hành vi bạo lực sẽ dẫn tới hai hệ quả, một là các em cảm thấy sợ hãi, mất niềm tin khi kẻ gây bạo lực không bị trừng phạt; hai là các em có thể hùa theo số đông, ủng hộ hành vi này và có nhiều khả năng trở thành kẻ có hành vi bạo lực trong tương lai." }
    ];
    function calculateSimilarity(str1, str2) {
        const words1 = str1.toLowerCase().split(" ");
        const words2 = str2.toLowerCase().split(" ");
        const totalWords = Math.max(words1.length, words2.length);
        const matchedWords = words1.filter(word => words2.includes(word)).length;
        const totalLetters1 = str1.length;
        const totalLetters2 = str2.length;
        const matchedLetters = Array.from(str1.toLowerCase()).filter(letter => str2.toLowerCase().includes(letter)).length;
        return {
            wordAccuracy: matchedWords / totalWords,
            letterAccuracy: matchedLetters / Math.max(totalLetters1, totalLetters2)
        };
    }


    function findBestMatch(input) {
        let bestMatch = null;
        let bestScore = 0;
        knowledgeBase.forEach(item => {
            const similarity = calculateSimilarity(input, item.question);
            const averageAccuracy = (similarity.wordAccuracy + similarity.letterAccuracy) / 2;
            if (averageAccuracy >= 0.6 && averageAccuracy > bestScore) {
                bestMatch = item.answer;
                bestScore = averageAccuracy;
            }
        });
        return bestMatch;
    }

    const response = findBestMatch(input);
    return response ? response : "Tôi không biết. Bạn hãy viết thêm để bổ nghĩa";
}







