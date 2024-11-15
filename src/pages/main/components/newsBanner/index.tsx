import { Spinner } from "@/components/common/Spinner";
import Carousel from "@/components/feature/carousel";

import { useFetchArticleList } from "@/pages/main/apis/fetchArticleList.api";
import * as Styles from "@/pages/main/components/newsBanner/index.style";

const NewsBanner: React.FC = () => {
    const { data: articles, isLoading, isError } = useFetchArticleList();

    if (isLoading) return <Spinner />;
    if (isError) return <div>뉴스를 불러오는 데 실패했습니다.</div>;

    return (
        <Styles.BannerWrapper>
            <Styles.BannerHeader>
                <Styles.TitleContainer>
                    <Styles.Title>
                        이달의 <span>최신 뉴스</span>
                    </Styles.Title>
                    <Styles.Underline />
                </Styles.TitleContainer>
            </Styles.BannerHeader>
            <Carousel
                images={articles?.map((article) => article.articleImagePath) || []}
                titles={articles?.map((article) => article.articleTitle) || []}
            />
        </Styles.BannerWrapper>
    );
};

export default NewsBanner;
