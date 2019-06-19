<?php get_header(); ?>

	<main class="main" role="main" aria-label="Content">
		<!-- section -->
		<section>

			<h1><?php esc_html_e( 'Category: ', 'html5blank' ); single_cat_title(); ?></h1>

			<?php get_template_part( 'loop' ); ?>

			<?php get_template_part( 'pagination' ); ?>

		</section>
		<!-- /section -->
	</div>

<?php get_sidebar(); ?>

<?php get_footer(); ?>
