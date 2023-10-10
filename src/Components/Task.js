import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Task = ({ text, todo, todos, setTodos, Toggle, openModal, ...props }) => {
  var currentId;

  const deletehandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    toast.success("Todo Deleted Successfully");
  };
  const completedHandler = () => {
    sessionStorage.setItem("IdValue", todo.id);
    Toggle();
    console.log(props.editToggle);
    props.setEditToggle(true);
    props.setInputtext(todo.text);
    props.setStatus(todo.completed.toLowerCase());
  };

  return (
    <div className="todo">
      <div className="taskName">
        <input type="checkbox" name="task" id="task" />
        <span
          className={`todo-item-${
            todo.completed !== "incomplete" ? "completed" : ""
          }`}
        >
          {text}
          <p className="addedTime">{todo.time}</p>
        </span>
      </div>
      <div className="taskAction">
        <button className="trash-btn" onClick={deletehandler}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6_QXno68F2O6U-gKgz35ERh_-lhrXS0It1g&usqp=CAU"
            alt="delete symbol"
            border="0"
          />
          {/* <i className="fas fa-trash"></i> */}
        </button>
        <button className="complete-btn" onClick={completedHandler}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9ycnLV1dVra2toaGjZ2dn6+vpubm739/ejo6OXl5dnZ2efn5+IiIiTk5ODg4Pk5OTu7u58fHzBwcGOjo7o6Oivr6+np6fJycl2dnbQ0NC3t7fExMTf39+1tbXm5uZZWVlYficOAAAFEElEQVR4nO2d65LaMAxGAwmYJbDcr1vYvv9T1gE2CyF24liOZFXnd6fDGeuTlDjTJokgCIIgCIIgCIIgCEIPjHfLCfZvCMj4uM3yPF/vV9i/JBDLRaYGBanaYP+WIIwefgXZAfvXBGCYDZ7IZti/B5xhOngh+8D+RcCMKoI6jLwUR1lVkNkpVkuUXRbrBRmdYl2Jssri0CjIpFBNJcpG0S7IIIvmDDLJYtMJRl+oQ9UsGHWhvq9qzArVNiZYFGqbDEat6CIYZRabx8Qr0WWxfQbLU4ysUKdONXpXjOwUP/krbt0VY8til0KVLFKjQxZjK9Qu7eY/KNT/QDGyQpWhUXuKUqjU4LLAjcz38zzm4jBfmBU5ZFE/0as5rCKti/DbE72aj41/oMPQyCh9zvB4oldrs2KHLCo6H6WUL50UaBbTfY8OVp7eqtmy6H6K6x4lbLy8VVMLwCzmND4Qq7xVsym6Fmq+7NHDyNvlC+DQyHc9ipiouXyxDQ23LGbmv6g3al/82grVRVFtezQxYLibABoa2bFHlXqMly8gWVSLHlXqsVy+QAyN7LtHl1qsly/+C1w26tGllob7Qd9CTYc9utTSeAHqt8DhC7a4APXJIvkS/VHsWqgpvmCr72Q6Z5FAibYeaZ0WuAxd0OGOvsvQiCSDpaJzFvFL1O07Gecs4gu6fifjODSiymCpaMli9RQJjAn3d4IuharQT7D1mGiv+NxRI8xgqdjqqT+yMVFVbC5U/BNsuaoZFBuziC/YuUR/FO1DI8oxUVG0LnBRZ7BUtGUR/wT9Be1ZxMYzg6WiZWjg4p1B6opeY6KiSLJQO65qJkV6pwiUwVKRXKGCdNFXRVqFCi5ILYvAJfpQJFSoYGOiomhZ4PolQIk+FIkUajBBKopBMlgqEuioAU+wIMd/XIJb1eqI9q1aWxg80TcI4pdo2BPEf+nEXjDomJAM9iEYtkTxx4Rk0A/2JYp/goFXNXxBGROegpJBEfREMuhHpN/JtAd/VQv8RM8/g9xLFP8E2QvKmPAUlAyKoCcyJvwgsKrJ5YsXMibCC3LvouwFZVXzFOSeQfwxIRn0g32Jsl/VCJSorGp+gvglyr2Lshdkv6olp6CC+GMiWQUVxF/VkuQSMoX4GdQcAxrij4mCfbhthsQJJslnMEMiguNFKEECY+LGKtQR0sigZpmHESRSokmwVkpHMNkHMaSSwYJpiBwSWNV+WQcQpLCqlYwDNBpKJRqklZIZE3fgWymhLnrjCm1ITRC8ldLKYAHwAz6xDGomsEVKrkR1KwU1JCiYnCEN6ZVoAttKSa1qJYCtlGKJauAe8OmNiRsTsGFBMoOaHVQMiZaobqVAVxZkBZMvmDMkmsGCGUgrpTkm7swhBEk90VeYQAjSzaBmBfCAT3VM3AFopaRPEKKVEhdMPnxbKeExccd3K6WdwQLPGFIvUe9WSl/Q81sv8hnUbHxaKeVVrcRnK6W8qv3i0UojyKBm3P0Bn/6YuLHrXKRxnKDHd8GxCHZupTGMiTvuW6lSaTo4xZHBgq2DoVbL1eLz8OdC57+MbmTS7huFwi1fT/fajcq/8tuWxs+9tFuanj6vx0tsag9s/11omqWnxfR6vuD/m7ce1LZS7ZYP5rPr+TuivJk4qDe3fD37Oq+iPrdnflppMQLUaTHbDBkc2wunwi1L19vZZrSLtJdYmfw9bQ+bEZ+afGPMV00QBEEQBEEQBEEQhHj5B0wATUp7vZp0AAAAAElFTkSuQmCC"
            alt="edit symbol"
            border="0"
          />
        </button>
      </div>
    </div>
  );
};
export default Task;
