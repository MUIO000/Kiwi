import React from 'react';
import './Grandma.css';

const Grandma: React.FC = () => {
  return (
    <section className="grandma-section">
      <div className="grandma-container">
        <div className="grandma-content">
          <div className="grandma-text">
            <div className="grandma-portrait">
              <img src="/images/7.jpg" alt="奶奶" />
            </div>
            <h2 className="grandma-title">奶奶的猕猴桃</h2>
            <div className="grandma-story">
              <p className="story-paragraph">
                我的奶奶，在这片肥沃的土地上默默耕耘了50多年。她用双手见证了四季轮回，
                用汗水浇灌着每一寸土地，用爱心呵护着每一株作物。
              </p>
              <p className="story-paragraph">
                正是奶奶这份对土地的深情与坚持，才有了今天我们能够品尝到的纯天然、
                无污染的优质猕猴桃。每一颗果实都承载着她的心血与期望。
              </p>
            </div>
          </div>
          
          <div className="grandma-images">
            <div className="image-group left-aligned">
              <div className="image-label">劳动时节</div>
              <div className="image-placeholder main-image">
                <img src="/images/5(1).jpg"alt="奶奶劳作照片" />
              </div>
            </div>
            
            <div className="image-group right-aligned">
              <div className="image-label">果园实拍</div>
              <div className="image-placeholder main-image">
                <img src="/images/3.jpg"alt="果园实拍" />
              </div>
            </div>
            
            <div className="image-group left-aligned">
              <div className="image-label">丰收时刻</div>
              <div className="image-placeholder main-image">
                <img src="/images/2.jpg"alt="丰收时刻" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grandma; 