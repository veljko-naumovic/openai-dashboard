import styles from "./Skeleton.module.scss";

type SkeletonProps = {
	width?: string;
	height?: string;
};

export default function Skeleton({
	width = "100%",
	height = "20px",
}: SkeletonProps) {
	return (
		<div
			className={styles.skeleton}
			style={{
				width,
				height,
			}}
		/>
	);
}
